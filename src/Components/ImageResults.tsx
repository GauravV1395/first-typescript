import React from "react";
import unsplash from "../unsplash";
import ImageList from "./ImageList";
import { Redirect } from "react-router-dom";
import { ClipLoader } from "react-spinners";

interface IReceiveProps {
  location: any;
}

interface IReceiveImages {
  listOfImages: Array<any>;
  onBack: boolean;
  loading: boolean;
}

export default class ImageResult extends React.Component<
  IReceiveProps,
  IReceiveImages
> {
  public state = { listOfImages: [], onBack: false, loading: false };
  public componentDidMount() {
    this.setState({
      loading: true
    });
    const term = this.props.location.state.searchTerm;
    this.fetchImages(term);
  }

  public fetchImages = async (term: any) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({
      listOfImages: response.data.results,
      loading: false
    });
  };

  public onBackClick = () => {
    this.setState({
      onBack: true
    });
  };

  public render() {
    if (this.state.onBack) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <ImageList images={this.state.listOfImages} />
        <div
          className="sweet-loading"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button
            type="button"
            onClick={this.onBackClick}
            style={{
              color: "white",
              backgroundColor: "#008CBA",
              borderColor: "#008CBA",
              marginTop: "20",
              fontSize: "20px",
              padding: "14px 40px",
              borderRadius: "8px"
            }}
          >
            Back
          </button>
          <ClipLoader
            sizeUnit={"px"}
            size={50}
            color={"#008CBA"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
