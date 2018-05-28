import React, { Component } from "react";
import vis from "vis";
import styles from "./VisComponent.css";

const nodes = [
  {
    id: 1,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/1.png"
  },
  {
    id: 2,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/2.png"
  },
  {
    id: 3,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/3.png"
  },
  {
    id: 4,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/4.png",
    label: "picture by this guy!"
  },
  {
    id: 5,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/5.png"
  },
  {
    id: 6,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/6.png"
  },
  {
    id: 7,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/7.png"
  },
  {
    id: 8,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/8.png"
  },
  {
    id: 9,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/9.png"
  },
  {
    id: 10,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/10.png"
  },
  {
    id: 11,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/11.png"
  },
  {
    id: 12,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/12.png"
  },
  {
    id: 13,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/13.png"
  },
  {
    id: 14,
    shape: "circularImage",
    image: "http://visjs.org/examples/network/img/indonesia/14.png"
  }
];

const edges = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 4, to: 5 },
  { from: 4, to: 10 },
  { from: 4, to: 6 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 8, to: 10 },
  { from: 10, to: 11 },
  { from: 11, to: 12 },
  { from: 12, to: 13 },
  { from: 13, to: 14 }
];

export default class VisComponent extends Component {
  componentDidMount() {
    this.init();
  }
  init() {
    const container = this.vis;
    const data = {
      nodes,
      edges
    };
    const options = {
      nodes: {
        borderWidth: 4,
        size: 30,
        color: {
          border: "#222222",
          background: "#666666"
        },
        font: { color: "#eeeeee" }
      },
      edges: {
        color: "lightgray"
      }
    };
    const network = new vis.Network(container, data, options);
  }
  render() {
    return (
      <div ref={vis => (this.vis = vis)} className={styles.wrapper}>
        我是visComponent
      </div>
    );
  }
}
