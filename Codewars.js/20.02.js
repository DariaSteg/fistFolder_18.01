var cubeChecker = function(volume, side){
    if(((volume/side)/side) == side && ((volume/side)/side)>0){return true;}return false;
  }