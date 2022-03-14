import axios from "axios";
import { mockHttpResponse } from "../../../core/tests/http-client.mock";

const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};

export default mockAxios;
