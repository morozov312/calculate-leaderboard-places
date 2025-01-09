function calculateLeaderboardPlaces(users, minScores) {
    const usersByScoreDesc = [...users].sort((a, b) => b.score - a.score);
    const places = [
        {place: 1, minScore: minScores.firstPlaceMinScore},
        {place: 2, minScore: minScores.secondPlaceMinScore},
        {place: 3, minScore: minScores.thirdPlaceMinScore},
    ];
    const prizePlaces = new Set();
    let otherPlace = 4;

    return usersByScoreDesc.map((user) => {
        const assignedPlace = places.find(
            ({place, minScore}) => !prizePlaces.has(place) && user.score >= minScore
        );
        if (assignedPlace) {
            prizePlaces.add(assignedPlace.place);
            return {userId: user.userId, place: assignedPlace.place};
        }
        return {userId: user.userId, place: otherPlace++};
    });
}

module.exports = {calculateLeaderboardPlaces};
