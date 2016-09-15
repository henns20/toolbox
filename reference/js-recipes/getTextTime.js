/**
* Given the time of creation of a post returns how long since the creation of the post in text
* format. e.g. 5d, 10h, now...
* Recipe from friendly pix demo app 
* needs to have access to a original timestamp of the node/input/post
*/


funtion  getTimeText(postCreationTimestamp) {
            let millisecond = Date.now() - postCreationTimestamp;
            const ms = millisecond % 1000;
            // converts in value to seconds
            millisecond = (millisecond - ms) / 1000;
            const seconds = millisecond % 60;
            millisecond = (millisecond - seconds) / 60;
            const minutes = millisecond % 60;
            millisecond = (millisecond - minutes) / 60;
            const hours = millisecond  % 24;
            const days = (millisecond- hours) / 24;
            var timeSinceCreation = [days, hours, minutes, seconds, ms];

            let timeText = 'Now';
            if (timeSinceCreation[0] !== 0) { 
                timeText = timeSinceCreation[0] + 'd';
            } else if (timeSinceCreation[1] !== 0) {
                timeText = timeSinceCreation[1] + 'h';
            } else if (timeSinceCreation[2] !== 0) {
                timeText = timeSinceCreation[2] + 'm';
            }
            return timeText;
            
        }
    }
}
