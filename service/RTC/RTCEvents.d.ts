export type RTCEvents =
  | "rtc.create_answer_failed"
  | "rtc.create_offer_failed"
  | "rtc.data_channel_open"
  | "rtc.endpoint_conn_status_changed"
  | "rtc.dominant_speaker_changed"
  | "rtc.lastn_endpoint_changed"
  | "rtc.permissions_changed"
  | "rtc.sender_video_constraints_changed"
  | "rtc.lastn_value_changed"
  | "rtc.local_track_ssrc_updated"
  | "rtc.local_track_max_enabled_resolution_changed"
  | "rtc.track_attached"
  | "rtc.remote_track_added"
  | "rtc.remote_track_mute"
  | "rtc.remote_track_removed"
  | "rtc.remote_track_unmute"
  | "rtc.set_local_description_failed"
  | "rtc.set_remote_description_failed"
  | "rtc.audio_output_device_changed"
  | "rtc.device_list_changed"
  | "rtc.device_list_will_change"
  | "rtc.device_list_available"
  | "rtc.endpoint_message_received"
  | "rtc.endpoint_stats_received"
  | "rtc.local_ufrag_changed"
  | "rtc.remote_ufrag_changed"
