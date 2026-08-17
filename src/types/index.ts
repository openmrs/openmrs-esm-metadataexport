export type MetadataDomain = string;

export interface ExportPackageEntryDto {
  domain: MetadataDomain;
}

export interface ExportPackageRequest {
  name: string;
  description: string;
  entries: Array<ExportPackageEntryDto>;
}
