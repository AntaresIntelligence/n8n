import { Service } from 'typedi';
import { TypedEmitter } from '@/typed-emitter';
import type { RelayEventMap } from './relay-event-map';
import type { QueueMetricsEventMap } from './queue-metrics-event-map';
import type { AiEventMap } from './ai-event-map';

type EventMap = RelayEventMap & QueueMetricsEventMap & AiEventMap;

@Service()
export class EventService extends TypedEmitter<EventMap> {}
