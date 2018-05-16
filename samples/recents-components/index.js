import React from 'react';

import JoinCallButton from '@ciscospark/react-component-join-call-button';
import SpaceItem from '@ciscospark/react-component-space-item';
import SpacesList from '@ciscospark/react-component-spaces-list';

function RecentsComponents() {
  function onCallClick(id) {
    // eslint-disable-next-line no-alert
    window.alert(`onCallClick: ${id}`);
  }

  function onClick(id) {
    // eslint-disable-next-line no-alert
    window.alert(`onClick: ${id}`);
  }

  function onJoinClick() {
    // eslint-disable-next-line no-alert
    window.alert('onJoinClick');
  }

  const spacesListSpaces = [
    {
      id: 'decrypting-space',
      isDecrypting: true,
      name: 'Webex User'
    },
    {
      activityText: 'Hey there!',
      callStartTime: Date.now(),
      id: 'jane-doe-space',
      lastActivityTime: '9:05 PM',
      latestActivity: {
        actorName: 'Jane Doe',
        type: 'post'
      },
      isUnread: true,
      name: 'Webex User',
      teamColor: 'blue',
      teamName: 'Best Team'
    },
    {
      activityText: 'Hey there!',
      callStartTime: Date.now(),
      id: 'red-team-group-space',
      lastActivityTime: '9:05 PM',
      latestActivity: {
        actorName: 'Jane Doe',
        type: 'post'
      },
      isUnread: true,
      name: 'Red Team Group Space',
      teamColor: 'red',
      teamName: 'Red Team',
      type: 'group'
    }
  ];

  return (
    <div style={{maxWidth: 500}}>
      <h3>JoinCallButton</h3>
      <JoinCallButton
        callStartTime={Date.now()}
        onJoinClick={onJoinClick}
      />
      <h3>SpaceItem</h3>
      <h4>Decrypting</h4>
      <SpaceItem
        id="decrypting-space"
        isDecrypting
        name="Webex User"
        onClick={onClick}
      />
      <h4>Unread without calling</h4>
      <SpaceItem
        activityText="Hi there!"
        id="jane-doe-space"
        lastActivityTime="9:05 PM"
        isUnread
        onCallClick={onCallClick}
        onClick={onClick}
        name="Webex User"
        teamColor="blue"
        teamName="Best Team"
      />
      <h4>Unread with calling</h4>
      <SpaceItem
        activityText="Calling!"
        callStartTime={Date.now()}
        id="jane-doe-space"
        lastActivityTime="9:05 PM"
        isUnread
        hasCalling
        onCallClick={onCallClick}
        onClick={onClick}
        name="Webex User"
        teamColor="blue"
        teamName="Best Team"
      />
      <h4>Active</h4>
      <SpaceItem
        activityText="I'm an active space!"
        id="active-space-id"
        lastActivityTime="8:02 AM"
        latestActivity={{
          actorName: 'Andrew',
          type: 'post'
        }}
        active
        onCallClick={onCallClick}
        onClick={onClick}
        name="Webex Teams"
        teamColor="green"
        teamName="Web Team"
      />
      <h4>No Team</h4>
      <SpaceItem
        activityText="I have no team!"
        id="no-team-space"
        lastActivityTime="9:05 PM"
        onCallClick={onCallClick}
        onClick={onClick}
        name="Teamless"
      />
      <h3>SpaceList</h3>
      <SpacesList
        hasCalling
        onCallClick={onCallClick}
        onClick={onClick}
        spaces={spacesListSpaces}
      />
      <h4>No Calling</h4>
      <SpacesList
        onCallClick={onCallClick}
        onClick={onClick}
        spaces={spacesListSpaces}
      />
    </div>
  );
}

export default RecentsComponents;
