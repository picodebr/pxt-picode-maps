namespace pxsim {
    export async function createTurtleSprite() {
        return new createjs.Sprite(await turtleSpriteSheet(), "default");
    }

    async function turtleSpriteSheet() {
        if (turtleSpriteSheet.cached) {
            return turtleSpriteSheet.cached;
        }
        const ssb = new createjs.SpriteSheetBuilder();
        (await loadImages("picode.png", "picode.png", "picode.png")).map(
            (i) => {
                i.regX = 380;
                i.regY = 293;
                ssb.addFrame(i, undefined, 0.06);
            }
        );
        turtleSpriteSheet.cached = ssb.build();
        return turtleSpriteSheet.cached;
    }

    namespace turtleSpriteSheet {
        export let cached: createjs.SpriteSheet;
    }

    function loadImages(...sources: string[]) {
        return new Promise<createjs.Bitmap[]>((resolve, reject) => {
            const queue = new createjs.LoadQueue();
            for (const src of sources) {
                queue.loadFile({ src, type: createjs.LoadQueue.IMAGE });
            }
            queue.addEventListener("error", (e) => {
                queue.removeAllEventListeners("complete");
                reject(e);
            });
            queue.addEventListener("complete", () => {
                resolve(
                    queue
                        .getItems(true)
                        .map((i) => new createjs.Bitmap((i as any).result))
                );
            });
        });
    }
}
