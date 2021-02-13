//
//  OrientationModule.swift
//  OrientationProvider
//
//  Created by Anton Patrushev on 13.02.21.
//

import Foundation

let portraitMode: String = "portrait"
let landscapeMode: String = "landscape"

@objc(OrientationManager)
class OrientationManager: NSObject {
  
  @objc
  func getOrientation() -> String {
    let device = UIDevice.currentDevice()
    if device.generatesDeviceOrientationNotifications {
      device.beginGeneratingDeviceOrientationNotifications()
      
      if device.orientation.isLandscape {
        return landscapeMode
      }
      
      return portraitMode
    } else {
      return portraitMode
    }
  }
  
}
