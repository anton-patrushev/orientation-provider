package com.orientationprovider.OrientationManager;

import android.view.OrientationEventListener;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.orientationprovider.EventService;

import static android.hardware.SensorManager.SENSOR_DELAY_NORMAL;

public class OrientationEventEmitter extends ReactContextBaseJavaModule {
    String currentOrientation;

    OrientationEventEmitter(ReactApplicationContext context) {
        super(context);

        subscribeToOrientationChanged();
    }


    private void handleOrientationChanged() {
        String orientation = OrientationService.getOrientation(getReactApplicationContext());

        WritableMap params = Arguments.createMap();
        params.putString("orientation", orientation);

        EventService.sendEvent(getReactApplicationContext(),
                OrientationEvents.ON_ORIENTATION_CHANGED.toString(),
                params);
    }

    private void subscribeToOrientationChanged() {
        this.currentOrientation = OrientationService.getOrientation(getReactApplicationContext());

        OrientationEventListener orientationListener = new OrientationEventListener(
                getReactApplicationContext(), SENSOR_DELAY_NORMAL) {
            @Override
            public void onOrientationChanged(int _) {
                String orientation = OrientationService.getOrientation(getReactApplicationContext());

                if (currentOrientation.equals(orientation)) return;

                currentOrientation = orientation;

                handleOrientationChanged();
            }
        };

        if (orientationListener.canDetectOrientation()) {
            orientationListener.enable();
        }
    }


    @Override
    public String getName() {
        return "OrientationEventEmitter";
    }
}