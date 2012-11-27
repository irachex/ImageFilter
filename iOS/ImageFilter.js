/*
Copyright (c) 2012 Drew Dahlman MIT LICENSE
*/
(function() {

var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks

function ImageFilter() {};

ImageFilter.prototype.clean = function (options) {

    cordovaRef.exec("ImageFilter.clean");
};
ImageFilter.prototype.use = function(name, done, options) {
    var defaults = {
        image: '',
        save: '',
    };
    for(var key in defaults) {
        if(typeof options[key] !== "undefined") defaults[key] = options[key];
    }
    return cordovaRef.exec(done, null, "ImageFilter", name, [defaults]);
}

ImageFilter.prototype.none = function(done, options) {
    return this.use('none');
};
ImageFilter.prototype.sunnySide = function(done, options) {
    return this.use('sunnySide');
};
ImageFilter.prototype.worn = function(done, options) {
    return this.use('worn');
};
ImageFilter.prototype.vintage = function(done, options) {
    return this.use('vintage');
};
ImageFilter.prototype.stark = function (done,options) {
    return this.use('stark');
};

ImageFilter.install = function() {
    if(!window.plugins) window.plugins = {};
    if (!window.plugins.ImageFilter) window.plugins.ImageFilter = new ImageFilter();    
}

if (cordovaRef && cordovaRef.addConstructor) {
    cordovaRef.addConstructor(ImageFilter.install);
} else {
    console.log("ImageFilter Cordova Plugin could not be installed.");
    return null;
}

window.ImageFilter = ImageFilter
})();