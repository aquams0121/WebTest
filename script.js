function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main    = document.getElementById('main');
  const isOpen  = sidebar.classList.toggle('open');
  main.classList.toggle('dimmed', isOpen);
}

const fcbPlayers = {
  fw: {
    "7": {
      profile: {
        registeredName: "Ferran Torres",
        koreanName: "페란 토레스",
        fullName: "Ferran Torres García",
        backNumber: 7,
        height: 184,
        weight: 77, // 몸무게는 스크린샷에 없어서 일반적인 프로필 기준 77kg 반영
        birth: "2000-02-29",
        nationality: "스페인",
        foot: "오른발"
      },
      history: {
        career: [
          "발렌시아 B (2017~2018)",
          "발렌시아 (2017~2020)", 
          "맨체스터 시티 (2020~2021)", 
          "FC 바르셀로나 (2021~현재)"
        ],
        honors: [
          "라리가 우승 3회 (22/23, 24/25, 25/26)",
          "코파 델 레이 우승 2회 (18/19, 24/25)",
          "수페르코파 데 에스파냐 우승 3회",
          "UEFA 네이션스 리그 우승 1회 (22/23)",
          "UEFA 유로 2024 우승 1회",
          "프리미어리그 우승 1회 (20/21)",
          "EFL 컵 우승 1회 (20/21)"
        ],
        awards: [],
        nationalTeam: {
          apps: 55,     // 스크린샷 합산 (6+14+19+1+15)
          goals: 23,    // 스크린샷 합산 (2+6+7+0+8)
          assists: 6    // 스크린샷 합산 (2+3+0+0+1)
        },
        pastSeasons: [
          "25/26 시즌 (바르셀로나): 49경기 21골 3도움",
          "24/25 시즌 (바르셀로나): 45경기 19골 7도움",
          "23/24 시즌 (바르셀로나): 42경기 11골 3도움",
          "22/23 시즌 (바르셀로나): 45경기 7골 3도움",
          "21/22 시즌 (바르셀로나): 26경기 7골 6도움",
          "21/22 시즌 (맨시티): 7경기 3골 1도움",
          "20/21 시즌 (맨시티): 36경기 13골 3도움",
          "19/20 시즌 (발렌시아): 44경기 6골 8도움",
          "18/19 시즌 (발렌시아): 37경기 3골 2도움",
          "17/18 시즌 (발렌시아): 16경기 0골 2도움"
        ]
      },
      currentSeason: {
        general: {
          apps: 49,          // 이 화면에는 안 나와있지만 이전 통산기록 기준 49경기 유지
          minutesPlayed: 1976 // 출전 시간
        },
        shooting: {
          goals: 16,            // 득점
          xG: 13.16,            // 예상 골 (xG)
          xGOT: 12.42,          // xG 유효 슈팅 (xGOT)
          xGWithoutPK: 13.16,   // PK 제외한 xG
          shots: 69,            // 슛
          shotsOnTarget: 37,    // 유효 슈팅
          headingShots: 11      // 헤딩 슛
        },
        passing: {
          assists: 2,           // 어시스트
          xA: 1.72,             // 예상 어시스트 (xA)
          passesSucceeded: 357, // 성공한 패스
          passSuccessRate: 75.8,// 성공한 패스 %
          longPassesSucceeded: 8, // 정확한 긴 패스
          longPassSuccessRate: 57.1, // 정확한 긴 패스 %
          chancesCreated: 23,   // 기회 창출
          bigChancesCreated: 5, // 큰 기회 만듦
          crossesSucceeded: 1,  // 성공한 크로스
          crossSuccessRate: 33.3// 성공한 크로스 %
        },
        possession: {
          dribblesSucceeded: 9,      // 드리블 성공
          dribbleSuccessRate: 34.6,  // 드리블 성공 %
          duelsWon: 60,              // 볼 경합 성공
          duelSuccessRate: 44.1,     // 볼 경합 성공 %
          aerialDuelsWon: 25,        // 공중 볼 경합 성공
          aerialDuelSuccessRate: 58.1, // 공중 볼 경합 성공 %
          touches: 738,              // 터치
          touchesInOppBox: 125,      // 상대편 박스 내에서의 터치
          dispossessed: 21,          // 볼 뺏김
          foulsWon: 20               // 획득한 파울
        },
        defense: {
          defensiveActions: 21,     // 수비적 행동
          tackles: 7,               // 태클
          interceptions: 3,         // 가로채기
          blockedShots: 1,          // 막힌 슛
          fouls: 13,                // 반칙
          ballRecoveries: 36,       // 볼 회수
          finalThirdPossession: 9,  // 공격 지역 점유율
          dribbledPast: 8,          // 드리블로 제침
          clearances: 10,           // 걷어내기
          cleanSheets: 2,           // 클린 시트
          goalsConceded: 20,        // 출전 시 실점
          xGConceded: 27.59         // 출전 중 xG 실점
        },
        discipline: {
          yellowCards: 2, // 경고
          redCards: 0     // 퇴장
        }
      }
    }
  },
mf: {
    "8": {
      profile: {
        registeredName: "Pedri", // 등록명
        koreanName: "페드리",     // 한국 이름
        fullName: "Pedro González López", // 풀네임
        backNumber: 8,           // 등번호
        height: 174,             // 키
        weight: 61,              // 몸무게
        birth: "2002-11-25",     // 생년월일
        nationality: "스페인",    // 국적
        foot: "오른발"            // 주발
      },
      history: {
        career: [
          "라스 팔마스 (2019~2020)",
          "FC 바르셀로나 (2020~현재)"
        ], // 경력
        honors: [
          "라리가 우승 3회 (22/23, 24/25, 25/26)",
          "코파 델 레이 우승 2회 (20/21, 24/25)",
          "수페르코파 데 에스파냐 우승 3회 (22/23, 24/25, 25/26)",
          "UEFA 네이션스 리그 A 우승 1회 (22/23)",
          "UEFA 유로 2024 우승 1회"
        ], // 대회 우승 기록
        awards: [], // 개인 수상 기록
        nationalTeam: {
          apps: 40,   // 국가대표 경기 수
          goals: 5,   // 국가대표 골
          assists: 4  // 국가대표 어시스트
        },
        pastSeasons: [
          "25/26 시즌 (바르셀로나): 43경기 2골 12도움",
          "24/25 시즌 (바르셀로나): 59경기 6골 8도움",
          "23/24 시즌 (바르셀로나): 34경기 4골 5도움",
          "22/23 시즌 (바르셀로나): 35경기 7골 1도움",
          "21/22 시즌 (바르셀로나): 22경기 5골 1도움",
          "20/21 시즌 (바르셀로나): 52경기 4골 6도움",
          "19/20 시즌 (라스 팔마스): 37경기 4골 6도움"
        ] // 역대 시즌 기록
      },
      currentSeason: {
        general: {
          apps: 43,          // 경기 수
          minutesPlayed: 2107 // 출전 시간
        },
        shooting: {
          goals: 2,            // 득점
          xG: 1.57,            // 예상 골 (xG)
          xGOT: 1.74,          // xG 유효 슈팅 (xGOT)
          xGWithoutPK: 1.57,   // PK 제외한 xG
          shots: 21,           // 슛
          shotsOnTarget: 10,   // 유효 슈팅
          headingShots: 1      // 헤딩 슛
        },
        passing: {
          assists: 9,           // 어시스트
          xA: 5.39,             // 예상 어시스트 (xA)
          passesSucceeded: 1892, // 성공한 패스
          passSuccessRate: 91.6, // 성공한 패스 %
          longPassesSucceeded: 94, // 정확한 긴 패스
          longPassSuccessRate: 68.6, // 정확한 긴 패스 %
          chancesCreated: 63,   // 기회 창출
          bigChancesCreated: 8, // 큰 기회 만듦
          crossesSucceeded: 5,  // 성공한 크로스
          crossSuccessRate: 38.5 // 성공한 크로스 %
        },
        possession: {
          dribblesSucceeded: 38,     // 드리블 성공
          dribbleSuccessRate: 67.9,  // 드리블 성공 %
          duelsWon: 141,             // 볼 경합 성공
          duelSuccessRate: 61.0,     // 볼 경합 성공 %
          aerialDuelsWon: 10,        // 공중 볼 경합 성공
          aerialDuelSuccessRate: 33.3, // 공중 볼 경합 성공 %
          touches: 2463,             // 터치
          touchesInOppBox: 37,       // 상대편 박스 내에서의 터치
          dispossessed: 29,          // 볼 뺏김
          foulsWon: 43               // 획득한 파울
        },
        defense: {
          defensiveActions: 99,     // 수비적 행동
          tackles: 50,              // 태클
          interceptions: 24,        // 가로채기
          blockedShots: 2,          // 막힌 슛
          fouls: 9,                 // 반칙
          ballRecoveries: 153,      // 볼 회수
          finalThirdPossession: 18, // 공격 지역 점유율
          dribbledPast: 32,         // 드리블로 제침
          clearances: 23,           // 걷어내기
          cleanSheets: 9,           // 클린 시트
          goalsConceded: 20,        // 출전 시 실점
          xGConceded: 26.20         // 출전 중 xG 실점
        },
        discipline: {
          yellowCards: 0, // 경고
          redCards: 1     // 퇴장
        }
      }
    }
  },
  df: {
    "5": {
      profile: {
        registeredName: "Pau Cubarsí", // 등록명
        koreanName: "쿠바르시",         // 한국 이름
        fullName: "Pau Cubarsí Paredes", // 풀네임
        backNumber: 5,             // 등번호
        height: 184,               // 키
        weight: 75,                // 몸무게 (스크린샷 생략으로 실제 프로필 75kg 반영)
        birth: "2007-01-22",       // 생년월일
        nationality: "스페인",      // 국적
        foot: "오른발"              // 주발
      },
      history: {
        career: [
          "바르셀로나 아틀레틱 (2023~2024)",
          "FC 바르셀로나 (2023~현재)"
        ], // 경력
        honors: [
          "라리가 우승 2회 (24/25, 25/26)",
          "코파 델 레이 우승 1회 (24/25)",
          "수페르코파 데 에스파냐 우승 2회 (24/25, 25/26)",
          "2024 파리 올림픽 금메달"
        ], // 대회 우승 기록
        awards: [], // 개인 수상 기록
        nationalTeam: {
          apps: 11,   // 국가대표 경기 수 (6+5)
          goals: 0,   // 국가대표 골
          assists: 2  // 국가대표 어시스트 (1+1)
        },
        pastSeasons: [
          "25/26 시즌 (바르셀로나): 48경기 1골 0도움",
          "24/25 시즌 (바르셀로나): 56경기 1골 4도움",
          "23/24 시즌 (바르셀로나): 24경기 0골 1도움",
          "23/24 시즌 (바르셀로나 아틀레틱): 9경기 0골 0도움"
        ] // 역대 시즌 기록
      },
      currentSeason: {
        general: {
          apps: 48,          // 경기 수
          minutesPlayed: 2756 // 출전 시간
        },
        shooting: {
          goals: 1,            // 득점
          xG: 0.54,            // 예상 골 (xG)
          xGOT: 0.46,          // xG 유효 슈팅 (xGOT)
          xGWithoutPK: 0.54,   // PK 제외한 xG
          shots: 10,           // 슛
          shotsOnTarget: 2,    // 유효 슈팅
          headingShots: 5      // 헤딩 슛
        },
        passing: {
          assists: 0,           // 어시스트
          xA: 0.72,             // 예상 어시스트 (xA)
          passesSucceeded: 2429, // 성공한 패스
          passSuccessRate: 94.9, // 성공한 패스 %
          longPassesSucceeded: 71, // 정확한 긴 패스
          longPassSuccessRate: 57.7, // 정확한 긴 패스 %
          chancesCreated: 5,    // 기회 창출
          bigChancesCreated: 1, // 큰 기회 만듦
          crossesSucceeded: 0,  // 성공한 크로스 (기록 없음)
          crossSuccessRate: 0   // 성공한 크로스 % (기록 없음)
        },
        possession: {
          dribblesSucceeded: 1,      // 드리블 성공
          dribbleSuccessRate: 100.0, // 드리블 성공 %
          duelsWon: 117,             // 볼 경합 성공
          duelSuccessRate: 60.0,     // 볼 경합 성공 %
          aerialDuelsWon: 65,        // 공중 볼 경합 성공
          aerialDuelSuccessRate: 62.5, // 공중 볼 경합 성공 %
          touches: 3084,             // 터치
          touchesInOppBox: 13,       // 상대편 박스 내에서의 터치
          dispossessed: 4,           // 볼 뺏김
          foulsWon: 9                // 획득한 파울
        },
        defense: {
          defensiveActions: 231,    // 수비적 행동
          tackles: 42,              // 태클
          interceptions: 30,        // 가로채기
          blockedShots: 12,         // 막힌 슛
          fouls: 25,                // 반칙
          ballRecoveries: 104,      // 볼 회수
          finalThirdPossession: 13, // 공격 지역 점유율
          dribbledPast: 13,         // 드리블로 제침
          clearances: 147,          // 걷어내기
          cleanSheets: 11,          // 클린 시트
          goalsConceded: 29,        // 출전 시 실점
          xGConceded: 38.47         // 출전 중 xG 실점
        },
        discipline: {
          yellowCards: 3, // 경고
          redCards: 0     // 퇴장
        }
      }
    }
  },
gk: {
    "13": {
      profile: {
        registeredName: "Joan García", // 등록명
        koreanName: "주안 가르시아",    // 한국 이름
        fullName: "Joan García Pons",  // 풀네임
        backNumber: 13,                // 등번호
        height: 193,                   // 키
        weight: 85,                    // 몸무게 (스크린샷 생략으로 기존 85kg 반영)
        birth: "2001-05-04",           // 생년월일
        nationality: "스페인",          // 국적
        foot: "오른발"                  // 주발
      },
      history: {
        career: [
          "에스파뇰 B (2019~2021)",
          "에스파뇰 (2021~2025)",
          "FC 바르셀로나 (2025~현재)"
        ], // 경력
        honors: [
          "라리가 우승 1회 (25/26)",
          "수페르코파 데 에스파냐 우승 1회 (25/26)",
          "라리가2 우승 1회 (20/21)",
          "2024 파리 올림픽 금메달"
        ], // 대회 우승 기록
        awards: [], // 개인 수상 기록
        nationalTeam: {
          apps: 1,   // 국가대표 경기 수
          goals: 0,  // 국가대표 골
          assists: 0 // 국가대표 어시스트
        },
        pastSeasons: [
          "25/26 시즌 (바르셀로나): 45경기 0골 0도움",
          "24/25 시즌 (에스파뇰): 39경기 0골 0도움",
          "23/24 시즌 (에스파뇰): 21경기 0골 0도움",
          "22/23 시즌 (에스파뇰): 4경기 0골 0도움",
          "21/22 시즌 (에스파뇰): 4경기 0골 0도움",
          "20/21 시즌 (에스파뇰 B): 15경기 0골 0도움",
          "19/20 시즌 (에스파뇰 B): 2경기 0골 0도움"
        ] // 역대 시즌 기록
      },
      currentSeason: {
        general: {
          apps: 45,          // 경기 수
          minutesPlayed: 0   // 출전 시간 (사진에서 잘려있음)
        },
        goalkeeping: {
          saves: 74,             // 선방
          savePercentage: 77.9,  // 선방 확률 %
          goalsConceded: 21,     // 실점 수
          goalsPrevented: 12.24, // 득점 차단
          cleanSheets: 15,       // 클린 시트
          penaltySaved: 0,       // 페널티 막음
          penaltyConceded: 2,    // 페널티 실점
          penaltySavePercentage: 0.0, // Penalty save %
          errorsLedToGoal: 1,    // 골로 이어진 실수
          sweeperActions: 52,    // 키퍼가 스위퍼로 처리
          highClaims: 22         // 공중에서 잡기
        },
        distribution: {
          passesSucceeded: 764,     // 성공한 패스
          passSuccessRate: 89.7,    // 성공한 패스 %
          longPassesSucceeded: 88,  // 정확한 긴 패스
          longPassSuccessRate: 51.2,// 정확한 긴 패스 %
          xA: 0.01                  // 예상 어시스트 (xA)
        },
        discipline: {
          yellowCards: 1, // 경고
          redCards: 0     // 퇴장
        }
      }
    }
  }
};

