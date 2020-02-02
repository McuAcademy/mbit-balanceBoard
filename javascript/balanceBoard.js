// Degrees to tilt before changing the LED location
let sensitivity = 45;

// Primary code loop
basic.forever(function () {
  // Guard against bad values
  if (sensitivity <= 0) {
    // Do not allow zero or negative sensitivities
    sensitivity = 5;
  } else if (sensitivity > 90) {
    // Do not allow sensitivity to go over 90
    sensitivity = 90;
  }

  // Read the accelerometer for pitch and roll
  let pitch = input.rotation(Rotation.Pitch);
  let roll = input.rotation(Rotation.Roll);

  // Convert degrees into something the display can use
  let xLoc = Math.round(2 + (roll / sensitivity));
  let yLoc = Math.round(2 + (pitch / sensitivity));

  // Clear the screen and plot the new point
  basic.clearScreen();
  led.plot(xLoc, yLoc);
});

// Decrease sensitivity
input.onButtonPressed(Button.A, function() {
  // Higher values are less sensitive to movements
  sensitivity = sensitivity + 5;
});

// Increase sensitivity
input.onButtonPressed(Button.B, function() {
  // Lower values are more sensitive to movements
  sensitivity = sensitivity - 5;
});
