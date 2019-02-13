var timerData = [
    {
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 10,
        days: {
            "sunday": { elements: ["Sun", "Priest", "Mage", "Alchemist"], short:"Sun" },
            "monday": { elements: ["Moon", "Gold", "Warrior"], short:"Mon" },
            "tuesday": { elements: ["Fire", "Knight", "Priest"], short:"Tue" },
            "wednesday": { elements: ["Water", "Gold", "Mage"], short:"Wed" },
            "thursday": { elements: ["Wind", "Warrior", "Alchemist"], short:"Thu" },
            "friday": { elements: ["Gold", "Priest", "Mage"], short:"Fri" },
            "saturday": { elements: ["Earth", "Warrior", "Knight"], short:"Sat" }
        }
    },
    {
        type: "Maintenance",
        title: [
            "Maintenance",
            "Summon Renovation",
            "Event Preparation"
        ],
        image: "Maintenance",
        column: 0,
        priority: 9,
        timers: [
            {
                name: "Scheduled Time",
                start: "February 14 2019, 14:00",
                end: "February 14 2019, 17:00",
                keepAfterFinished: "30 minutes"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Chocolate Panic",
            "チョコレートパニック",
            "Valentine 2019 Event"
        ],
        image: "https://i.imgur.com/RTHrVJB.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Main Scenario",
                start: "January 31 2019, 17:00",
                end: "February 15 2019, 13:59"
            },
            {
                name: "Boss Quest",
                start: "February 2 2019, 17:00",
                end: "February 15 2019, 13:59"
            },
            {
                name: "EX Quest",
                start: "February 4 2019, 17:00",
                end: "February 15 2019, 13:59"
            },
            {
                name: "Event Shop",
                start: "January 31 2019, 17:00",
                end: "February 22 2019, 13:59"
            }
        ]
    },
    {
        type: "Event",
        title: [
            "Etowaria Adventure Log, Part 1: Instructor Rize’s Secret Training",
            "エトワリア冒険譚 前編 リゼ教官の秘密特訓",
            "Rize Event"
        ],
        image: "https://i.imgur.com/H0gYCq5.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Main Scenario",
                start: "February 14 2019, 17:00",
                end: "March 12 2019, 13:59",
                markers: {
                    "Season 2": "February 16 2019, 17:00",
                    "Season 3": "February 18 2019, 17:00"
                }
            },
            {
                name: "After the Training",
                start: "February 18 2019, 17:00",
                end: "March 12 2019, 13:59",
                markers: {
                    "Chapter 2": "February 22 2019, 0:00",
                    "Chapter 3": "February 23 2019, 0:00",
                    "Chapter 4": "February 24 2019, 0:00",
                    "Chapter 5": "February 25 2019, 0:00"
                }
            },
            {
                name: "Boss Quest",
                start: "February 20 2019, 17:00",
                end: "March 19 2019, 13:59",
            },
            {
                name: "EX Quest",
                start: "February 22 2019, 17:00",
                end: "March 19 2019, 13:59",
            },
            {
                name: "Event Shop",
                start: "February 14 2019, 17:00",
                end: "March 19 2019, 13:59",
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Chocolate Panic Missions",
            "チョコレートパニック",
            "Valentine 2019 Event Missions"
        ],
        image: "https://i.imgur.com/RTHrVJB.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Missions",
                start: "January 31 2019, 00:00",
                end: "February 13 2019, 13:59",
                markers: {
                    "Mission Set 2": "February 2 2019, 0:00",
                    "Mission Set 3": "February 4 2019, 0:00"
                }
            }
        ]
    },
    {
        type: "Mission",
        title: [
            "Etowaria Adventure Log, Part 1: Instructor Rize’s Secret Training Missions",
            "エトワリア冒険譚 前編 リゼ教官の秘密特訓",
            "Rize Event Missions"
        ],
        image: "https://i.imgur.com/H0gYCq5.png",
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Missions",
                start: "February 14 2019, 17:00",
                end: "March 12 2019, 23:59",
                markers: {
                    "Mission Set 2": "February 18 2019, 0:00",
                    "Mission Set 3": "February 20 2019, 0:00"
                }
            }
        ]
    },
    
    {
        type: "Gacha",
        title: [
            "Valentine 2019 Limited Summon",
            "期間限定2019バレンタインキャラクターピックアップ召喚"
        ],
        image: "https://i.imgur.com/RTHrVJB.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Koume [Valentine], 5* Mio [Valentine]",
                start: "January 31 2019, 17:00",
                end: "February 14 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Valentine 2018 Limited Summon",
            "期間限定2018バレンタインキャラクターピックアップ召喚"
        ],
        image: "https://i.imgur.com/c7ow9i2.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Aya [Valentine], 5* Shiina [Valentine], 4* Tsubame [Valentine]",
                start: "February 8 2019, 17:00",
                end: "February 15 2019, 16:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Etowaria Adventure Log, Part 1: Instructor Rize’s Secret Training Summon",
            "エトワリア冒険譚 前編 リゼ教官の秘密特訓 ピックアップ召喚"
        ],
        image: "https://i.imgur.com/H0gYCq5.png",
        column: 1,
        timers: [
            {
                name: "Featuring 5* Rize, 4* Iketani Nono",
                start: "February 14 2019, 17:00",
                end: "March 3 2019, 23:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "New Characters Summon",
            "新規キャラクターピックアップ召喚",
            "Featuring 5* Megu-nee, 4* Megu-nee, 4* Minaha"
        ],
        image: "https://i.imgur.com/8ujtPI5.png",
        column: 1,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 13:59"
            }
        ]
    },
    {
        type: "Gacha",
        title: [
            "Choose your 5* Summon Ticket",
            "★5選べるチケット付き！有償限定10回召喚",
            "400 paid gems for a summon + a special 5* Summon Ticket"
        ],
        image: "clea",
        column: 1,
        timers: [
            {
                name: "Summon Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 13:59"
            },
            {
                name: "Ticket Expiration",
                start: "January 17 2019, 17:00",
                end: "February 5 2019, 23:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Half Stamina Campaign",
            "消費スタミナ1/2キャンペーン",
            "For Daily Quests and Main Quest (except Prologue, chapter 8 and Hard Mode)"
        ],
        image: "kirara",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "January 29 2019, 13:59",
                keepAfterFinished: "1 hours"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Valentine Login Bonus",
            "バレンタインログインボーナス",
            "Log in for 11 days for 200 Gems and a Event Call Ticket"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 1 2019, 0:00",
                end: "February 14 2019, 23:59",
                keepAfterFinished: "6 hours"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Etowaria Adventure Log Interlude Login Bonus",
            "エトワリア冒険譚 幕間ログインボーナス",
            "Log in for 5 days for 100 Gems"
        ],
        image: "lamp",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "February 22 2019, 0:00",
                end: "February 27 2019, 23:59",
                keepAfterFinished: "6 hours"
            }
        ]
    },
    {
        type: "WeekendBoss",
        title: [
            "February Boss Challenge",
            "Fight a boss every weekend",
            "Receive Challenge Medals"
        ],
        image: "https://i.imgur.com/HnFf7IS.png",
        column: 2,
        timers: [
            {
                name: "Weekend 1",
                start: "February 2 2019, 0:00",
                end: "February 3 2019, 23:59"
            },
            {
                name: "Weekend 2",
                start: "February 9 2019, 0:00",
                end: "February 10 2019, 23:59"
            },
            {
                name: "Weekend 3",
                start: "February 16 2019, 0:00",
                end: "February 17 2019, 23:59"
            },
            {
                name: "Weekend 4",
                start: "February 23 2019, 0:00",
                end: "February 24 2019, 23:59"
            },
            {
                name: "Medal exchange period",
                start: "February 2 2019, 0:00",
                end: "March 1 2019, 23:59",
                keepAfterFinished: "6 hours",
                type: "normal"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "Limited Valentine Room Decorations",
            "New and Past Valentine-themed items"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 31 2019, 17:00",
                end: "February 15 2019, 13:59"
            }
        ]
    },
    {
        type: "Other",
        title: [
            "400 Days Celebration Sale",
            "400日記念セール",
            "Discounted Gem Set prices"
        ],
        image: "kanna",
        column: 2,
        timers: [
            {
                name: "Period",
                start: "January 17 2019, 17:00",
                end: "February 3 2019, 23:59"
            }
        ]
    }
];
