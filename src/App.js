
import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import NodesPanel from './components/NodesPanel';
import SettingsPanel from './components/SettingsPanel';
import SaveButton from './components/SaveButton';
import TextNode from './components/TextNode';

import './App.css';

const nodeTypes = {
  textNode: TextNode,
};

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const addNode = (type) => {
    const id = `node_${nodes.length + 1}`;
    const newNode = {
      id,
      type,
      position: { x: 250, y: 5 },
      data: { label: `Node ${nodes.length + 1}`, setNodes },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onNodeSelect = (event, node) => setSelectedNode(node);

  const onSave = () => {
    console.log('Nodes:', nodes);
    console.log('Edges:', edges);

    const nodeIdsWithIncomingEdges = new Set(edges.map(edge => edge.target));
    const hasUnconnectedNodes = nodes.some(node => !nodeIdsWithIncomingEdges.has(node.id));
    console.log('Edges1:', hasUnconnectedNodes, nodes.length > 1);

    // if (nodes.length > 1 && hasUnconnectedNodes) {
    //   alert("Error: One or more nodes have empty target handles.");
    // } else {
      // save logic here
      alert("Flow saved successfully!");
    // }
  };

  return (
    <div className="app">
      <NodesPanel onAddNode={addNode} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDoubleClick={onNodeSelect}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <SettingsPanel node={selectedNode} setNodes={setNodes} />
      <SaveButton onSave={onSave} />
    </div>
  );
}

export default App;
