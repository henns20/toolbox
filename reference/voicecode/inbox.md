## performance

### Nice
- nicing dragon & voicecode processes
    dragon
    - sudo renice -20 -p $(pgrep Dragon)
    voicecode
    - sudo renice -20 -p $(pgrep -f "config/settings.json")
    - checking the current processes running
        - ps x -l | grep <argument>
        - ps x -l
- conversation on slack: https://voicecode.slack.com/archives/issues/p1464463689000138
