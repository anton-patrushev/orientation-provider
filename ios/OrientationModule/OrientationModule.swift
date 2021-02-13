//
//  OrientationModule.swift
//  OrientationProvider
//
//  Created by Anton Patrushev on 13.02.21.
//

import Foundation
import UIKit

@objc(OrientationManager)
class OrientationManager: NSObject {
  
  private let device: UIDevice = UIDevice.current
  
  private let portraitMode: String = "portrait"
  private let landscapeMode: String = "landscape"
  
  private let errorMessage: String = "Unable to get device orientation"
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override init() {
    UIDevice.current.beginGeneratingDeviceOrientationNotifications()
    
    super.init()
  }
  
  @objc
  func getOrientation(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    
    if device.isGeneratingDeviceOrientationNotifications == false {
      return reject(errorMessage, errorMessage, nil)
    }
    
    return resolve(getOrientationSynchronously())
  }
  
  @objc
  func getOrientationSynchronously() -> String {
    
    if device.orientation.isLandscape {
      return landscapeMode
    }
    
    return portraitMode
  }
}
