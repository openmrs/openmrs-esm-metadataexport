import { type FetchResponse, openmrsFetch, restBaseUrl } from '@openmrs/esm-framework';
import { type ExportPackageRequest } from '../types/index';

export function createPackage(
  payload: ExportPackageRequest,
  abortController?: AbortController,
): Promise<FetchResponse<ExportPackageRequest>> {
  return openmrsFetch(`${restBaseUrl}/metadataexport/packages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    signal: abortController?.signal,
  });
}
