package com.orientationprovider.OrientationManager;

import androidx.annotation.NonNull;

public enum Orientation {
    LANDSCAPE {
        @NonNull
        @Override
        public String toString() {
            return "landscape";
        }
    }, PORTRAIT {
        @NonNull
        @Override
        public String toString() {
            return "portrait";
        }
    }
}