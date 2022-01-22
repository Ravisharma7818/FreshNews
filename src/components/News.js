import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        category: 'sports'
    }
    static propTypes = {
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log('I AM Constructor');
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }
    // ${this.props.api}
    async componentDidMount() {

        let url =`${this.props.api}&category=${this.props.category}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata);
        this.setState(
            { articles: parsedata.articles,
                loading: false
            
            })

    }

    handlePreclick = async () => {
        console.log('Previous');

        let url = `${this.props.api}&page=${this.state.page - 1}&category=${this.props.category}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false
        })

    }

    handleNextclick = async () => {
        console.log('Next');

        let url = `${this.props.api}&page=${this.state.page + 1}&category=${this.props.category}`;
        let data = await fetch(url);
       this.setState({loading: true});
        let parsedata = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles,
            loading: false
        })
    }


    render() {
     
        return (
            <div>

                <div className="container my-3">

                    <h2 className="text-center">FreshNews - Top Headlines</h2>
                    <div className="row">
                    {this.state.loading && <Spinner/>}
                        {!this.state.loading &&this.state.articles.map((element) => {
                            return <div className="col-md-4 col-sm-12 col-xsm-12 col-xs-12" key={element.url}>
                                <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} CompleteNews={element.url} />
                                


                            </div>

                        })}
                    </div>
                    <div className="d-flex justify-content-between m-1">

                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreclick}>&#8592; Previous</button>
                        <h6>{this.state.page}</h6>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextclick} >Next &#8594;</button>
                    </div>

                        
                </div>
               

            </div>
        )
    }
}

export default News
