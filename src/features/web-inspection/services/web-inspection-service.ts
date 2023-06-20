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

export interface CreateCrawlData {
  keyword: string;
}

export interface CrawlDataResponse {
  id: string;
  status: 'active' | 'done';
  urls: string[];
}

class WebInspectionService {
  constructor(private api: AxiosInstance) {}

  async list(): Promise<ListCrawlsResponse[]> {
    return (await localStorage.getItem<ListCrawlsResponse[]>('items')) || [];
  }

  async find(id: string): Promise<CrawlDataResponse> {
    const response = await this.api.get<CrawlDataResponse>(`/crawl/${id}`);

    return response.data;
  }

  async create(data: CreateCrawlData): Promise<CreateCrawlResponse> {
    const response = await this.api.post<CreateCrawlResponse>('/crawl', data);

    await this.saveOnLocalStorage({
      ...data,
      ...response.data
    });

    return response.data;
  }

  private async saveOnLocalStorage(data: ListCrawlsResponse) {
    const items =
      (await localStorage.getItem<ListCrawlsResponse[]>('items')) || [];

    items.push(data);

    await localStorage.setItem('items', items);
  }
}

export const webInspectionService = new WebInspectionService(api);
