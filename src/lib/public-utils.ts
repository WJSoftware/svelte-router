import { RouterEngine } from './kernel/RouterEngine.svelte.js';
import type { RouteStatus } from './types.js';
import { noTrailingSlash } from './utils.js';

/**
 * Checks if a specific route is active according to the provided router engine or route status record.
 *
 * **Note:** `false` is also returned if no router engine is provided or if no route key is specified.
 * @param rsOrRouter A router engine or a router engine's route status record.
 * @param key The route key to check for activity.
 * @returns `true` if the specified route is active; otherwise, `false`.
 */
export function isRouteActive(
    rsOrRouter: RouterEngine | Record<string, RouteStatus> | null | undefined,
    key: string | null | undefined
): boolean {
    const rs = rsOrRouter instanceof RouterEngine ? rsOrRouter.routeStatus : rsOrRouter;
    return !!rs?.[key ?? '']?.match;
}

function hasLeadingSlash(paths: (string | undefined)[]) {
    for (let path of paths) {
        if (!path) {
            continue;
        }
        return path.startsWith('/');
    }
    return false;
}

/**
 * Joins the provided paths into a single path.
 * @param paths Paths to join.
 * @returns The joined path.
 */
export function joinPaths(...paths: string[]) {
    const result = paths.reduce(
        (acc, path, index) => {
            const trimmedPath = (path ?? '').replace(/^\/|\/$/g, '');
            return (
                acc +
                (index > 0 && !acc.endsWith('/') && trimmedPath.length > 0 ? '/' : '') +
                trimmedPath
            );
        },
        hasLeadingSlash(paths) ? '/' : ''
    );
    return noTrailingSlash(result);
}
