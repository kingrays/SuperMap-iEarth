export interface ILayerPanelConfigItem {
  type: String;
  thumbnail: String;
  proxiedUrl: String;
  name: String;
  S3MLayer: Boolean;
  chooseType: Boolean;
  vectorTilesMapName: String;
  children: Array<ILayerPanelConfigItem>;
}
