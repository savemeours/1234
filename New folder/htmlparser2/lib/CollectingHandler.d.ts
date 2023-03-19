import MultiplexHandler from "./MultiplexHandler";
import { Handler } from "./Parser";
export declare class CollectingHandler extends MultiplexHandler {
    _cbs: Partial<Handler>;
    events: [keyof Handler, ...unknown[]][];
    constructor(cbs?: Partial<Handler>);
    onreset(): void;
    restart(): void;
}
//# sourceMappingURL=CollectingHandler.d.ts.map