package com.orientationprovider.OrientationManager;

import android.content.res.Configuration;

import com.facebook.react.bridge.ReactApplicationContext;

public class OrientationService {
    static public String getOrientation(ReactApplicationContext context) {
        int orientation = context
                .getResources()
                .getConfiguration()
                .orientation;

        if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
            return Orientation.LANDSCAPE.toString();
        }

        return Orientation.PORTRAIT.toString();
    }
}
