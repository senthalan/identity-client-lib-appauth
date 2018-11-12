"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var end_session_request_handler_1 = require("./end_session_request_handler");
describe('Tests for the EndSession Request handler', function () {
    describe('Basic protocol tests', function () {
        it('Basic endsession flow tests', function (done) {
            var notifier = new end_session_request_handler_1.EndSessionNotifier();
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kX3Nlc3Npb25fcmVxdWVzdF9oYW5kbGVyX3Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZW5kX3Nlc3Npb25fcmVxdWVzdF9oYW5kbGVyX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCw2RUFBaUU7QUFFakUsUUFBUSxDQUFDLDBDQUEwQyxFQUFFO0lBQ25ELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtRQUMvQixFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBQyxJQUFZO1lBQzdDLElBQUksUUFBUSxHQUFHLElBQUksZ0RBQWtCLEVBQUUsQ0FBQztZQUN4QyxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0VuZFNlc3Npb25Ob3RpZmllcn0gZnJvbSAnLi9lbmRfc2Vzc2lvbl9yZXF1ZXN0X2hhbmRsZXInO1xuXG5kZXNjcmliZSgnVGVzdHMgZm9yIHRoZSBFbmRTZXNzaW9uIFJlcXVlc3QgaGFuZGxlcicsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0Jhc2ljIHByb3RvY29sIHRlc3RzJywgKCkgPT4ge1xuICAgIGl0KCdCYXNpYyBlbmRzZXNzaW9uIGZsb3cgdGVzdHMnLCAoZG9uZTogRG9uZUZuKSA9PiB7XG4gICAgICBsZXQgbm90aWZpZXIgPSBuZXcgRW5kU2Vzc2lvbk5vdGlmaWVyKCk7XG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=