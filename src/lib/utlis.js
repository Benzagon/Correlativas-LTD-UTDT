export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  export function forward_path(n, edges) {
    let nodes = [];
    edges.forEach(edge => {
      if (edge[0] === n) {
        nodes.push(edge[1]);
        forward_path(edge[1], edges).forEach(child => {
          nodes.push(child);
        });
      }
    });
    return nodes.filter(onlyUnique);
  }
  
  export function backward_path(n, edges) {
    let nodes = [];
    edges.forEach(edge => {
      if (edge[1] === n) {
        nodes.push(edge[0]);
        backward_path(edge[0], edges).forEach(parent => {
          nodes.push(parent);
        });
      }
    });
    return nodes.filter(onlyUnique);
  }
  
  export function path(n, edges) {
    return [...new Set([...forward_path(n, edges), ...backward_path(n, edges), n])];
  }
  
  export function getFullEdges(reactFlowEdges) {
    return reactFlowEdges.map(e => [e.source, e.target]);
  }
  
  export function filterNodesByID(id, nodes, edges) {
    const fullEdges = getFullEdges(edges);
    const related = path(id, fullEdges);
    return nodes.filter(node => related.includes(node.id));
  }
  
  export function filterNodesByYear(year, nodes) {
    return nodes.filter(node => node.data.year === year);
  }
  
  export function course_by_id(id, nodes) {
    return nodes.find(node => node.id === id);
  }
  
  export function generateCorrAmm(nodes, edges) {
    const fullEdges = getFullEdges(edges);
    const corrAmm = {};
    nodes.forEach(node => {
      corrAmm[node.id] = path(node.id, fullEdges).length - 1;
    });
    return corrAmm;
  }
  
  export function getNodeYear (years, year) {
    return years.find(y => y.id === year);
  };

  export function filterEdgesByVisibleNodes(nodes, allEdges) {
    const nodeIds = new Set(nodes.map((n) => n.id));
    return allEdges.filter(e => nodeIds.has(e.source) && nodeIds.has(e.target));
  }

  export function enrichNodes(nodes, edges) {
    const lefts = [];
    const rights = [];
  
    edges.forEach(e => {
      lefts.push(e.target);
      rights.push(e.source);
    });
  
    return nodes.map(n => ({
      ...n,
      data: {
        ...n.data,
        hasLeft: lefts.includes(n.id),
        hasRight: rights.includes(n.id)
      }
    }));
  }