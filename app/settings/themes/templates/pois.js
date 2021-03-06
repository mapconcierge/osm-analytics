export default ({ aggregatedFill, highlightFill }) => [
  {
    id: 'pois-raw',
    paint: {
      'circle-color': aggregatedFill,
      'circle-opacity': 1
    }
  },
  {
    id: 'pois-raw-highlight',
    paint: {
      'circle-color': highlightFill,
      'circle-opacity': 1
    },
  },

  {
    id: 'pois-aggregated-0',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[10, 0.1], [13, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-1',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[8, 0.1], [11, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-2',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[6, 0.1], [9, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-3',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[4, 0.1], [7, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-4',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[2, 0.1], [5, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-5',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[0, 0.1], [3, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-6',
    paint: {
      'fill-color': aggregatedFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[0, 1.0], [12, 1.0]]
      }
    },
  },

  {
    id: 'pois-aggregated-highlight-0',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[10, 0.1], [13, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-highlight-1',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[8, 0.1], [11, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-highlight-2',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[6, 0.1], [9, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-highlight-3',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[4, 0.1], [7, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-highlight-4',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[2, 0.1], [5, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-highlight-5',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[0, 0.1], [3, 1.0], [12, 1.0]]
      }
    },
  },
  {
    id: 'pois-aggregated-highlight-6',
    paint: {
      'fill-color': highlightFill,
      'fill-antialias': false,
      'fill-opacity': {
        base: 1,
        stops: [[0, 1.0], [12, 1.0]]
      }
    },
  }
]
