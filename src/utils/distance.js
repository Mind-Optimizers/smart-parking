export const  rad = function(x) {
    return x * Math.PI / 180;
};
  
export const getDistance = function(p1, p2) {
    const R = 6378137; // Earth’s mean radius in meter
    const dLat = rad(p2.latitude - p1._latitude);
    const dLong = rad(p2.longitude - p1._longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1._latitude)) * Math.cos(rad(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    console.log(d)
    return d;
}

