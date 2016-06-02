var HeroCards = React.createClass({
    loadHeros: function() {
        $.ajax({
            url: "/api/heros",
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({heros: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("/api/heros", status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {heros: []};
    },
    componentDidMount: function() {
        this.loadHeros();
    },
    render: function() {
        var herosCards = this.state.heros.map(function(hero) {
            return (
                <img src={"images/heros/" + hero + "/player-card.png"} alt={hero} />
            );
        });
        return (
            <div className="hero-cards">
                {herosCards}
            </div>
        );
    }
});

ReactDOM.render(
    <HeroCards />,
    document.getElementById('content')
);
