class KeyControls {
    constructor() {
        this.keys = {};
        // Bind event handlers
        document.addEventListener("keydown", e => {
            if(ArrowKeys.includes(e.which)) e.preventDefault(); // Prevent arrow keys to scroll
            this.keys[e.which] = true;
        }, false);
        document.addEventListener("keyup", e => this.keys[e.which] = false, false);
    }

    // Handle key actions
    get action() {
        return this.keys[KeyCodes.Spacebar];
    }

    get x() {
        let res = 0;
        // left arrow or A key
        if(this.keys[KeyCodes["Left-arrow"]] || this.keys[KeyCodes.A]) res = -1;
        // right arrow or D key
        if(this.keys[KeyCodes["Right-arrow"]] || this.keys[KeyCodes.D]) res = 1;

        return res;
    }
    get y() {
        let res = 0;
        // up arrow or W key
        if(this.keys[KeyCodes["Up-arrow"]] || this.keys[KeyCodes.W]) res = -1;
        // down arrow or S key
        if(this.keys[KeyCodes["Down-arrow"]] || this.keys[KeyCodes.S]) res = 1;

        return res;
    }

    key(key, value) {
        if(value !== undefined)
            this.keys[key] = !!value;
        return this.keys[key];
    }

    reset() {
        this.keys = {};
    }
}

const KeyCodes = {
    "break": 3,
    "Backspace": 8,
    "Tab": 9,
    "Clear": 12,
    "Enter": 13,
    "Shift": 16,
    "Ctrl": 17,
    "Alt": 18,
    "Pause": 19,
    "Capslock": 20,
    "Hangul": 21,
    "Hanja": 25,
    "Escape": 27,
    "Conversion": 28,
    "Non-conversion": 29,
    "Spacebar": 32,
    "Pageup": 33,
    "Pagedown": 34,
    "End": 35,
    "Home": 36,
    "Left-arrow": 37,
    "Up-arrow": 38,
    "Right-arrow": 39,
    "Down-arrow": 40,
    "Select": 41,
    "Print": 42,
    "Execute": 43,
    "Print-Screen": 44,
    "Insert": 45,
    "Delete": 46,
    "Help": 47,
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    ":": 58,
    "Semicolon": 59,
    "<": 60,
    "Equals": 61,
    "ß": 63,
    "@": 64,
    "A": 65,
    "B": 66,
    "C": 67,
    "D": 68,
    "E": 69,
    "F": 70,
    "G": 71,
    "H": 72,
    "I": 73,
    "J": 74,
    "K": 75,
    "L": 76,
    "M": 77,
    "N": 78,
    "O": 79,
    "P": 80,
    "Q": 81,
    "R": 82,
    "S": 83,
    "T": 84,
    "U": 85,
    "V": 86,
    "W": 87,
    "X": 88,
    "Y": 89,
    "Z": 90,
    "Special": 91,
    "Special-Right": 92,
    "Special-Right-Bis": 93,
    "Sleep": 95,
    "Numpad-0": 96,
    "Numpad-1": 97,
    "Numpad-2": 98,
    "Numpad-3": 99,
    "Numpad-4": 100,
    "Numpad-5": 101,
    "Numpad-6": 102,
    "Numpad-7": 103,
    "Numpad-8": 104,
    "Numpad-9": 105,
    "Multiply": 106,
    "Add": 107,
    "Numpad": 108,
    "Subtract": 109,
    "Decimalpoint": 110,
    "Divide": 111,
    "F1": 112,
    "F2": 113,
    "F3": 114,
    "F4": 115,
    "F5": 116,
    "F6": 117,
    "F7": 118,
    "F8": 119,
    "F9": 120,
    "F10": 121,
    "F11": 122,
    "F12": 123,
    "F13": 124,
    "F14": 125,
    "F15": 126,
    "F16": 127,
    "F17": 128,
    "F18": 129,
    "F19": 130,
    "F20": 131,
    "F21": 132,
    "F22": 133,
    "F23": 134,
    "F24": 135,
    "Numlock": 144,
    "Scrolllock": 145,
    "Airplane-mode": 151,
    "^": 160,
    "!": 161,
    "؛ (arabic semicolon)": 162,
    "#": 163,
    "$": 164,
    "ù": 165,
    "Page-backward": 166,
    "Page-forward": 167,
    "Refresh": 168,
    "Closing-paren-(AZERTY)": 169,
    "*": 170,
    "~": 171,
    "Home": 172,
    "Minus": 173,
    "Decrease-volume": 174,
    "Increase-volume": 175,
    "Next": 176,
    "Previous": 177,
    "Stop": 178,
    "Play/pause": 179,
    "E-mail": 180,
    "Mute": 181,
    "Decrease-volume-ff": 182,
    "Increase-volume-ff": 183,
    "Semi-colon": 186,
    "Equal": 187,
    "Comma": 188,
    "Dash": 189,
    "Period": 190,
    "Forward": 191,
    "Grave-accent": 192,
    "?": 193,
    "Numpad-period-ch": 194,
    "Open-bracket": 219,
    "Back-slash": 220,
    "Close-bracket": 221,
    "Single-quote": 222,
    "`": 223,
    "Special-ff": 224,
    "Altgr": 225,
    "GIT": 226,
    "GNOME-Compose-Key": 230,
    "ç": 231,
    "XF86Forward": 233,
    "YF86Back": 234,
    "Zon-conversion": 235,
    "Zlphanumeric": 240,
    "Hiragana-katakana": 242,
    "Halfwidth-fullwidth": 243,
    "Kanji": 244,
    "Unlock-trackpad": 251,
    "Toggle-touchpad": 255,
};

const ArrowKeys = [
    KeyCodes["Up-arrow"],
    KeyCodes["Right-arrow"],
    KeyCodes["Down-arrow"],
    KeyCodes["Left-arrow"]
];

export default KeyControls;