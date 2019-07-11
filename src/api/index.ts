import {Connector, initConnect, NetworkError} from 'ts-shelf';
import {format} from "url";

//initConnect('toop-sigma.herokuapp.com');
initConnect('localhost:9000', false);

class Api {
    public async execCode(code: string): Promise<{ termString: string }> {
        const url = format({
            pathname: '.json',
        });
        return await Connector.postApi<{ termString: string }>(
            url,
            {code},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            ''
        );
    }
}

export const API = new Api();
