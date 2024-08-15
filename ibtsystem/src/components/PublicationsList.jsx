import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PublicationsList = ({ publications = [] }) => {
  const [activeTab, setActiveTab] = useState('microbiota');

  const filterPublications = (category) => {
    return publications.filter(pub => pub.category === category);
  };

  const formatJournal = (journal) => {
    if (!journal) {
      return { highlightedPart: '', rest: '' };
    }
    const [highlightedPart, ...restParts] = journal.split(';');
    const rest = restParts.join(';');
    return { highlightedPart, rest };
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-center mb-6 border-b border-gray-200">
        <button
          className={`px-4 py-2 mr-4 transition duration-300 ${activeTab === 'microbiota' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500 hover:text-blue-500'}`}
          onClick={() => setActiveTab('microbiota')}
        >
          Shrimp microbiota and proteomics
        </button>
        <button
          className={`px-4 py-2 transition duration-300 ${activeTab === 'otras' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500 hover:text-blue-500'}`}
          onClick={() => setActiveTab('otras')}
        >
          Other research lines 
        </button>
        <button
          className={`px-4 py-2 transition duration-300 ${activeTab === 'SciComm' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500 hover:text-blue-500'}`}
          onClick={() => setActiveTab('SciComm')}
        >
          SciComm
        </button>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {activeTab === 'microbiota' 
            ? 'Shrimp microbiota and proteomics'
            : activeTab === 'SciComm'
            ? 'SciComm'
            : 'Other research lines'}
        </h2>
        {filterPublications(activeTab).map(pub => (
          <div key={pub.id} className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                {pub.title}
              </a>
            </h3>
            <p className="mb-1">{pub.authors}</p>
            {pub.journal && (
              <p className="text-sm text-gray-600">
                <span className="font-bold">{formatJournal(pub.journal).highlightedPart}</span>
                {formatJournal(pub.journal).rest && `;${formatJournal(pub.journal).rest}`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

PublicationsList.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    journal: PropTypes.string,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

export default PublicationsList;
