/**
 * Component Usage:
 *  <StarRating
 *      numberOfStars={number} - the total number of stars in rating {required, default: 3}
 *      />
 */
var StarRating = React.createClass({
    propTypes: {
        numberOfStars: React.PropTypes.number.isRequired
    },
    getDefaultProps: function() {
        return {
            numberOfStars: 3
        };
    },
    getStars: function () {
        var stars = [];
        for(var i = 0; i < this.props.numberOfStars; i++) {
            stars.push(<span className="empty star"></span>);
        }
        return stars;
    },
    render: function() {
        var stars = this.getStars();
        return (
            <div className="star-rating">
                {stars}
            </div>
        );
    }
});

ReactDOM.render(
    <StarRating />,
    document.getElementById('content')
);
