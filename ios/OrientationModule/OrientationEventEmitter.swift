//
//  OrientationEventEmitter.swift
//  OrientationProvider
//
//  Created by Anton Patrushev on 14.02.21.
//

import Foundation
import UIKit

typealias OrientationChangedEventHandler = (Orientation)->(Void)

let orientationChangedEventName = "onOrientationChanged"

@objc(OrientationEventEmitter)
class OrientationEventEmitter: RCTEventEmitter {
  
  override init() {
    super.init()
    
    subscribeToOrientationChangedEvent()
  }
  
  func subscribeToOrientationChangedEvent() {
    UIDevice.current.beginGeneratingDeviceOrientationNotifications()

    NotificationCenter.default.addObserver(
      forName: UIDevice.orientationDidChangeNotification,
      object: nil,
      queue: .main,
      using: orientationChangeHandler
    )
  }
  
  
  func orientationChangeHandler(notificatiton: Notification) -> Void {
    let orientation: Orientation = OrientationManager.getOrientationSynchronouslyHelper()
    
    sendEvent(withName: orientationChangedEventName, body: orientation.rawValue)
  }
  
  override func supportedEvents() -> [String] {
    return [orientationChangedEventName]
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
