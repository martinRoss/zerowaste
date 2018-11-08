## Setup
#sudo pip install adafruit-circuitpython-neopixel rpi_ws281x

# Recycling self start index = 42
# Recycle self end index = 84
# Recycle neighbor start index = 142
# Recycle neighbor end index = 98
# Trash neighbor start index = 149
# Trash neighbor end index = 191
# Trash self start index = 246
# Trash self end index = 191

import board
import neopixel
 
# NeoPixels must be connected to D10, D12, D18 or D21 to work.
pixel_pin = board.D18
 
# The number of NeoPixels
num_pixels = 288
 
# The order of the pixel colors - RGB or GRB. Some NeoPixels have red and green reversed!
# For RGBW NeoPixels, simply change the ORDER to RGBW or GRBW.
ORDER = neopixel.RGB
 
pixels = neopixel.NeoPixel(pixel_pin, num_pixels, brightness=1, auto_write=True,
                           pixel_order=ORDER)

green = (0, 255, 0)
blue = (0,0,255)

# recycle self
for x in range(42, 60):
    pixels[x] = green

# recycle neighbor
for x in range(142, 110, -1):
    pixels[x] = blue

# trash self
for x in range(246, 220, -1):
    pixels[x] = green

# trash neighbor
for x in range(149, 171):
    pixels[x] = blue
