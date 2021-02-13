//
//  RCTOrientationModule.m
//  OrientationProvider
//
//  Created by Anton Patrushev on 13.02.21.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(OrientationManager, NSObject)

RCT_EXTERN_METHOD(getOrientation: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)

RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(getOrientationSynchronously)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

@end
