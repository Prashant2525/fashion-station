import { Controller, Get } from "@nestjs/common";
import type { ApiSuccess, HealthStatus } from "@fashion-station/shared-types";

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): ApiSuccess<HealthStatus> {
    return {
      data: {
        status: "ok",
        timestamp: new Date().toISOString(),
        service: "fashion-station-api"
      }
    };
  }
}
