# calculate-leaderboard-places

## Description

Users participate in the competition and earn points. At the end of the competition, a leaderboard with the results is displayed. The more points a user has scored, the higher their position. Since cash payments are expected for the first 3 places, that is, a minimum number of points to get to the first 3 places.  
A user can take first place only if they have scored >= firstPlaceMinScore points.  
A user can take second place only if they have scored >= secondPlaceMinScore points.  
A user can take third place only if they have scored >= thirdPlaceMinScore points.  
If there is no user who has scored enough points for a place, then this place remains empty.  
The preview.png file shows how it will look in the end. It is only for demonstration, no need to implement the layout.  
It is necessary to implement the calculateLeaderboardPlaces function (https://codesandbox.io/s/calculate-leaderboard-places-v3xgy4?file=/src/index.js). 
The function distributes user places, taking into account the restrictions for getting first places and the points scored by users. The preview.png file is illustrative, no need to release the UI! Send the implemented function as a js file.  

## Описание

Пользователи участвуют в конкурсе и зарабатывают очки. По окончанию конкурса показывается лидерборд с результатами. Чем больше очков набрал пользователь, тем выше его позиция. Т.к. за первые 3 места предполагаются денежные выплаты, то есть минимальное количество очков, чтобы попасть на первые 3 места.  
Пользователь может занять первое место, только если набрал >= firstPlaceMinScore очков  
Пользователь может занять второе место, только если набрал >= secondPlaceMinScore очков  
Пользователь может занять третье место, только если набрал >= thirdPlaceMinScore очков 
Если для какого-то места нет пользователя, набравшего достаточно очков, то это место остаётся пустым. Файл preview.png показывает, как это в итоге будет выглядеть. Он только для демонстрации, реализовывать верстку не нужно.  
Необходимо реализовать функцию calculateLeaderboardPlaces (https://codesandbox.io/s/calculate-leaderboard-places-v3xgy4?file=/src/index.js). 
Функция распределяет места пользователей, учитывая ограничения для получения первых мест и набранные пользователями очки. Файл preview.png носит иллюстративный характер, не нужно релизовывать UI! Реализованную функцию прислать в виде js файла  



