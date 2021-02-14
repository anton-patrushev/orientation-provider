//
//  OrientationModule.swift
//  OrientationProvider
//
//  Created by Anton Patrushev on 13.02.21.
//

import Foundation
import UIKit

enum Orientation: String {
  case LANDSCAPE = "landscape"
  case PORTRAIT = "portrait"
}

let errorMessage: String = "Unable to get device orientation"

@objc(OrientationManager)
class OrientationManager: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override init() {
    super.init()
    
    UIDevice.current.beginGeneratingDeviceOrientationNotifications()
  }
  
  @objc
  func getOrientation(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    if UIDevice.current.isGeneratingDeviceOrientationNotifications == false {
      return reject(errorMessage, errorMessage, nil)
    }
    
    return resolve(OrientationManager.getOrientationSynchronouslyHelper())
  }
  
  static func getOrientationSynchronouslyHelper() -> Orientation {
    if UIDevice.current.orientation.isLandscape {
      return Orientation.LANDSCAPE
    }
    
    return Orientation.PORTRAIT
  }
  
  @objc
  func getOrientationSynchronously() -> String {
    let orientation = OrientationManager.getOrientationSynchronouslyHelper()
    
    return orientation.rawValue
  }
}
