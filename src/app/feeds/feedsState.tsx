'use client';

import React, { useEffect } from 'react';

interface FeedStatsInterface {
    total: number;
    week: number;
    day: number;
}

const FeedStats: React.FC = () => {
    const feedsStats: FeedStatsInterface = { total: 1432, week: 432, day: 22 };

    const [total, setTotal] = React.useState(0);

    useEffect(() => {
        let start = 1000;
        // This will animate the number from 0 to feedsStats.total over 1 second
        const interval = setInterval(() => {
            start += 1;
            setTotal(start);
            if (start === feedsStats.total) clearInterval(interval);
        }, 200 / feedsStats.total);

        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="feed-stats">
            <div>
                <div className="feed-stat-number">{total}</div>
                <div className="feed-stat-label">Busted in total</div>
            </div>
            <div>
                <div className="feed-stat-number">{feedsStats.week}</div>
                <div className="feed-stat-label">Busted in this week</div>
            </div>
            <div>
                <div className="feed-stat-number">{feedsStats.day}</div>
                <div className="feed-stat-label">Busted today</div>
            </div>
            <a href="search" className="feed-stat-cta cta">
                Start Searching
            </a>
        </div>
    );
};

export default FeedStats;
