##ImageFilter

ImageFilter is an easy to use phonegap/Cordova plugin that allows you to apply filters to images and save them out as hi-res versions.

Read more here http://www.drewdahlman.com/meusLabs/?p=138

####Usuage
1. Drag plugin files from Finder to Plugins folder in your project in XCode, using "Create groups for any added folders"
2. Add the .js files to your www folder on disk, and add reference(s) to the .js files as tags in your html file(s)
3. Add new entry with key `ImageFilter` and value `ImageFilter` to Plugins in PhoneGap.plist/Cordova.plist

####Javascript Interface

```javascript
plugins.ImageFilter.FILTER_NAME(
	successCallback{
	image:imageURI,
	save:'false' // TRUE IF SAVE
});
```

####Notes
- This plugin requires iOS 5+

####Updates
* Support Cordova 2.1.0
* Addressed Image caching issue. ( thanks to zsprawl )

####AVAILABLE CORE IMAGE FILTERS
<pre>
	CIAdditionCompositing
	CIAffineTransform
	CICheckerboardGenerator
	CIColorBlendMode
	CIColorBurnBlendMode
	CIColorControls
	CIColorCube
	CIColorDodgeBlendMode
	CIColorInvert
	CIColorMatrix
	CIColorMonochrome
	CIConstantColorGenerator
	CICrop
	CIDarkenBlendMode
	CIDifferenceBlendMode
	CIExclusionBlendMode
	CIExposureAdjust
	CIFalseColor
	CIGammaAdjust
	CIGaussianGradient
	CIHardLightBlendMode
	CIHighlightShadowAdjust
	CIHueAdjust
	CIHueBlendMode
	CILightenBlendMode
	CILinearGradient
	CILuminosityBlendMode
	CIMaximumCompositing
	CIMinimumCompositing
	CIMultiplyBlendMode
	CIMultiplyCompositing
	CIOverlayBlendMode
	CIRadialGradient
	CISaturationBlendMode
	CIScreenBlendMode
	CISepiaTone
	CISoftLightBlendMode
	CISourceAtopCompositing
	CISourceInCompositing
	CISourceOutCompositing
	CISourceOverCompositing
	CIStraightenFilter
	CIStripesGenerator
	CITemperatureAndTint
	CIToneCurve
	CIVibrance
	CIVignette
	CIWhitePointAdjust
</pre>

