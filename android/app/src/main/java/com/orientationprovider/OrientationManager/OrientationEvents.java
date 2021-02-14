package com.orientationprovider.OrientationManager;

import androidx.annotation.NonNull;

public enum OrientationEvents {
    ON_ORIENTATION_CHANGED {
        @NonNull
        @Override
        public String toString() {
            return "onOrientationChanged";
        }
    }
}