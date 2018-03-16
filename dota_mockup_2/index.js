// ffmpeg command used to convert screen recording to gif


// -ss start duration -t till time "setpts=2.0*PTS" slow it down by 50%

// ffmpeg  -ss 0 -t 3 -i Untitled.mov -vf scale=320:-1 -filter:v "setpts=2.0*PTS" -r 10 -f image2pipe -vcodec ppm - | convert -delay 5 -loop 0 - gif:- | convert -layers Optimize - output3.gif