function formatVoteCount(voteCount) {
    if (voteCount >= 1000000) return (voteCount / 1000000).toFixed(1) + 'm';
    if (voteCount >= 1000) return (voteCount / 1000).toFixed(1) + 'k';
    return voteCount.toString();
}

function VoteCount({ vote_count }) {
    const formattedVoteCount = formatVoteCount(vote_count);
    return <p className="text-center">{formattedVoteCount}</p>;
}

export default VoteCount;
