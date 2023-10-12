export type JitsiConferenceEvents =
  | "conference.audio_input_state_changed"
  | "conference.audio_unmute_permissions_changed"
  | "conference.auth_status_changed"
  | "conference.beforeStatisticsDisposed"
  | "conference.error"
  | "conference.failed"
  | "conference.join_in_progress"
  | "conference.joined"
  | "conference.left"
  | "conference.unique_id_set"
  | "conference.connectionEstablished"
  | "conference.connectionInterrupted"
  | "conference.connectionRestored"
  | "conference.dataChannelOpened"
  | "conference.dataChannelClosed"
  | "conference.displayNameChanged"
  | "conference.dominantSpeaker"
  | "conference.createdTimestamp"
  | "conference.dtmfSupportChanged"
  | "conference.endpoint_message_received"
  | "conference.endpoint_stats_received"
  | "conference.jvb121Status"
  | "conference.kicked"
  | "conference.participant_kicked"
  | "conference.lastNEndpointsChanged"
  | "conference.forwardedSourcesChanged"
  | "conference.lock_state_changed"
  | "conference.server_region_changed"
  | "conference.media_session.started"
  | "conference.media_session.active_changed"
  | "conference.membersOnlyChanged"
  | "conference.messageReceived"
  | "conference.no_audio_input"
  | "conference.noisy_mic"
  | "conference.non_participant_message_received"
  | "conference.privateMessageReceived"
  | "conference.partcipant_features_changed"
  | "conference.participant_property_changed"
  | "conference.participant_source_updated"
  | "conference.p2pStatus"
  | "conference.phoneNumberChanged"
  | "conference.propertiesChanged"
  | "conference.recorderStateChanged"
  | "conference.videoSIPGWAvailabilityChanged"
  | "conference.videoSIPGWSessionStateChanged"
  | "conference.start_muted_policy_changed"
  | "conference.started_muted"
  | "conference.subjectChanged"
  | "conference.suspendDetected"
  | "conference.talk_while_muted"
  | "conference.trackAdded"
  | "conference.audioLevelsChanged"
  | "conference.trackMuteChanged"
  | "conference.trackRemoved"
  | "conference.trackUnmuteRejected"
  | "conference.transcriptionStatusChanged"
  | "conference.userJoined"
  | "conference.userLeft"
  | "conference.roleChanged"
  | "conference.statusChanged"
  | "conference.video_unmute_permissions_changed"
  | "conference.bot_type_changed"
  | "conference.lobby.userJoined"
  | "conference.lobby.userUpdated"
  | "conference.lobby.userLeft"
  | "conference.av_moderation.approved"
  | "conference.av_moderation.rejected"
  | "conference.av_moderation.changed"
  | "conference.av_moderation.participant.approved"
  | "conference.av_moderation.participant.rejected"
  | "conference.breakout-rooms.move-to-room"
  | "conference.breakout-rooms.updated"
  | "conference.metadata.updated"
  | "conference.e2ee.verification.available"
  | "conference.e2ee.verification.ready"
  | "conference.e2ee.verification.completed"