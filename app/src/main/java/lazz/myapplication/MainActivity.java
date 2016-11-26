package lazz.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;import android.os.Bundle;
import android.widget.LinearLayout;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
