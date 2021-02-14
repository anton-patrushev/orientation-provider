package com.orientationprovider.OrientationManager;

import android.content.res.Configuration;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OrientationModule extends ReactContextBaseJavaModule {
    OrientationModule(ReactApplicationContext context) {
        super(context);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getOrientationSynchronously() {
        int orientation = getReactApplicationContext()
                .getResources()
                .getConfiguration()
                .orientation;

        if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
            return Orientation.LANDSCAPE.toString();
        }

        return Orientation.PORTRAIT.toString();
    }

    @ReactMethod
    public void getOrientation(Promise promise) {
        String orientation = this.getOrientationSynchronously();

        promise.resolve(orientation);
    }

    @Override
    public String getName() {
        return "OrientationManager";
    }
}