import { h, Component } from 'preact';

import places from 'places.js';

class LocationInput extends Component {
  componentDidMount() {
    const autocomplete = places({
      container: document.querySelector('#places')
    });

    autocomplete.on('change', e => {
      this.props.onLocationChange(e.suggestion.latlng);
    });
  }

  shouldComponentUpdate() {
    // Necessary for PlacesAutocomplete
    // Also, it's simply not necessary to ever re-render this Component
    return false;
  }

  render() {
    return (
      <div class="filter">
        <h3 class="filter__title">Location</h3>
        <input id="places" class="filter__input" type="search" />
      </div>
    );
  }
}

export default LocationInput;
