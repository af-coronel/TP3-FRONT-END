import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../componentes/Sidebar';
import Footer from '../componentes/Footer';
import '../assets/styles/treeVisualizer.css';
import treeOutput from '../assets/tree-output.txt?raw';

// --- Iconos ---
const FolderIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"></path></svg> );
const FileIcon = ({ extension }) => {
  const colors = { js: '#f7df1e', jsx: '#61dafb', css: '#1572b6', html: '#e34f26', png: '#d83b01', json: '#000000', md: '#0094dd', gitignore: '#f1502f', lock: '#CC3534', svg: '#FFB13B'};
  return ( <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill={colors[extension] || '#6c757d'} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 18H7v-2h2zm2 0h-2v-2h2zm2 0h-2v-2h2zm4-6H5V5h7v4h4z"></path></svg> );
};

// --- Componente recursivo para renderizar el árbol ---
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(node.type === 'folder');
  const isFolder = node.type === 'folder';
  const getExtension = (filename) => filename.split('.').pop();

  return (
    <div className="tree-node">
      <div className="node-label" onClick={() => isFolder && setIsOpen(!isOpen)}>
        {isFolder ? <FolderIcon /> : <FileIcon extension={getExtension(node.name)} />}
        <span className={isFolder ? 'folder-name' : 'file-name'}>{node.name}</span>
      </div>
      {isFolder && isOpen && (
        <div className="node-children">
          {node.children.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

// --- Lógica para parsear el texto de 'tree' ---
const parseTreeText = (text) => {
  const lines = text.split('\n').filter(line => line.trim() !== '' && line !== '.');
  if (lines.length === 0) return [];

  const root = [];
  const stack = [{ children: root, level: -1 }];

  lines.forEach(line => {
    const levelMatch = line.match(/^[│`\s]*/);
    const indentChars = levelMatch ? levelMatch[0] : '';
    const level = Math.floor(indentChars.replace(/ /g, ' ').length / 4);
    const name = line.replace(/^[│`\s├─└]*/, '');
    
    const node = { name, children: [] };

    while (stack.length > 1 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }
    
    const parent = stack[stack.length - 1];
    parent.children.push(node);
    stack.push({ ...node, level });
  });

  const assignType = (nodes) => {
    nodes.forEach(node => {
      if (node.children && node.children.length > 0) {
        node.type = 'folder';
        assignType(node.children);
      } else {
        node.type = 'file';
      }
    });
  };

  assignType(root);
  return root;
};


const TreeVisualizer = () => {
  const [structure, setStructure] = useState([]);

  useEffect(() => {
    const parsedStructure = parseTreeText(treeOutput);
    setStructure(parsedStructure);
  }, []);

  return (
    <div className="portada-container page-container-fade-in">
      <Sidebar />
      <div className="main-content">
        <h1 style={{ textAlign: "center" }}>Estructura del Proyecto</h1>


        <div className="tree-container-wrapper">
          <div className="tree-container">
            {structure.length > 0 ? (
              structure.map((node, index) => <TreeNode key={index} node={node} />)
            ) : (
              <p className="empty-state">Cargando estructura...</p>
            )}
          </div>
        </div>

        <Footer>
          <p>
            © 2025 Equipo Retro Front End Grupo 12 —{" "}
            <Link to="/paginas/bitacora">Bitacora</Link>
          </p>
          <p>Insert Coin 💾</p>
        </Footer>
      </div>
    </div>
  );
};

export default TreeVisualizer;