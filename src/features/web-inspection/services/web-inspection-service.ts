import { AxiosInstance } from 'axios';
import { api } from './api';
import { localStorage } from './localStorage';

export interface ListCrawlsResponse {
  id: string;
  keyword: string;
}

interface CreateCrawlResponse {
  id: string;
}

interface CreateCrawlData {
  keyword: string;
}

interface CrawlDataResponse {
  id: string;
  status: 'active' | 'done';
  urls: string[];
}

class WebInspectionService {
  constructor(private api: AxiosInstance) {}

  async list(): Promise<ListCrawlsResponse[]> {
    // localStorage.getItem('web-inspection:items');

    // localStorage.getItem('web-inspection:items');

    return [
      {
        id: 'um',
        keyword: 'um'
      }
    ];
  }

  //   find(id: string): CrawlDataResponse {}

  //   create(data: CreateCrawlData): CreateCrawlResponse {}
}

export const webInspectionService = new WebInspectionService(api);
